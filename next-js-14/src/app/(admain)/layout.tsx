"use client";

import { useEffect } from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    useEffect(() => {
        console.log("렌더링 시 사용됩니다.");
    }, []);

    return (
        <>
            <h1>Admine Page입니다.</h1>
            {children}
        </>
    );
};

export default AdminLayout;