import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from '../../Service';

type Product = {
    name: string;
    image: string;
    price: string;
    category: string;
    status: boolean;
    rating?: number;
    inventoryStatus: 'STOCK DISPONIVEL' | 'BAIXO STOCK' | 'SEM STOCK';
};

const ProductsPage: React.FC = () => {
  const products: Product[] = ProductService.getProducts();


      
  ;

    const imageBodyTemplate = (item: Product) => (
        <img src={item.image} alt={item.name} className="w-32 shadow-2 border-round" />
    );

    const ratingBodyTemplate = (item: Product) => (
        <Rating value={item.rating || 0} readOnly cancel={false} />
    );

    const statusBodyTemplate = (item: Product) => (
        <Tag value={item.inventoryStatus} severity={getSeverity(item.inventoryStatus)} />
    );

    const getSeverity = (inventoryStatus: Product['inventoryStatus']) => {
        switch (inventoryStatus) {
            case 'STOCK DISPONIVEL':
                return 'success';
            case 'BAIXO STOCK':
                return 'warning';
            case 'SEM STOCK':
                return 'danger';
            default:
                return null;
        }
    };

    return (
        <div className="">
            <DataTable value={products} tableStyle={{ minWidth: '60rem', display:'-ms-grid'}}>
                <Column field="name" header="Name" />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="price" header="Price" />
                <Column field="category" header="Category" />
                <Column field="rating" header="Reviews" body={ratingBodyTemplate} />
                <Column header="Status" body={statusBodyTemplate} />
            </DataTable>
        </div>
    );
};

export default ProductsPage;
