import React from "react";

type DetailProductPageProps = { params: {slug: string[]}};

export default function DetailProductPage(props: DetailProductPageProps) {
    const { params } = props;
    console.log(params);

    return (
        <div className="bg-white h-screen">
            <h1>{params.slug ? "apa" : 'Harap Tekan Produk yang ada di halaman utama'}</h1>
            {params.slug && (
                <>
                    <p>{params.slug[0]}</p>
                </>
            )}
        </div>
    )
}