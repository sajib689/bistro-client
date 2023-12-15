import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

const Order = ({img, title, description}) => {
    return (
        <div>
            <Helmet><title>Bistro | Shop</title></Helmet>
            <Cover img={img} title={title} description={description}></Cover>
        </div>
    );
};

export default Order;