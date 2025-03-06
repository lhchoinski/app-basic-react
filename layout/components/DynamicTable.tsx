import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

interface DynamicTableProps {
    columns: { field?: string; header: string; body?: (rowData: any) => JSX.Element }[];
    data: any[];
    selection: any;
    onSelectionChange: (value: any) => void;
    openNew: () => void;
    globalFilter: string;
    sortable?: boolean;
}

export const DynamicTable = ({
                                 columns,
                                 data,
                                 selection,
                                 onSelectionChange,
                                 openNew,
                                 globalFilter,
                                 sortable = false
                             }: DynamicTableProps) => {
    const dt = useRef<any>(null);
    const toast = useRef<any>(null);

    return (
        <div>
            <Toast ref={toast} />
            <div className="my-3">
                <Button label="Cadastrar" icon="pi pi-plus" severity="info" className="mr-2" raised onClick={openNew} />
            </div>

            <DataTable
                ref={dt}
                value={data}
                selection={selection}
                onSelectionChange={(e) => onSelectionChange(e.value)}
                dataKey="id"
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25]}
                className="datatable-responsive"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
                globalFilter={globalFilter}
                emptyMessage="Nenhum item encontrado."
            >
                <Column
                    selectionMode="multiple"
                />
                {columns.map((col, index) => (
                    <Column
                        key={index}
                        field={col.field}
                        header={col.header}
                        body={col.body}
                        sortable={sortable}
                    />
                ))}
            </DataTable>
        </div>
    );
};
export default DynamicTable;
