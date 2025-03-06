/* eslint-disable @next/next/no-img-element */

import React from 'react';

const AppFooter = () => {

    return (
        <div className="layout-footer">
            <div className="flex items-center">
                © {new Date().getFullYear()}
                - Developed by
                <a href="https://linkontech.com.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center hover:underline text-primary">
                    <img className="ml-1 mr-1" src="/lampada-transparente.png" height="20" />
                    LinkOnTech
                </a>
            </div>
        </div>
    );
};

export default AppFooter;
