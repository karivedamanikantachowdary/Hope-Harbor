import { useAuth } from "../store/auth";

export const Clothing = () => {
    const { foods } = useAuth();

    if (!Array.isArray(foods)) {
        return <div>Loading...</div>;
    }

    // Filter foods array based on the need property
    const foodsWithNoNeed = foods.filter(food => food.need === 'clothing');

    return (
        <section className="section-food">
            <div className="container">
                <h1 className="main-heading">Food</h1>
            </div>
            <div className="container">
                <div className="row">
                    {foodsWithNoNeed.map((curElem, index) => {
                        const { photo, description, place, need } = curElem;
                        
                        return (
                            <div className="col-md-6" key={index}>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img
                                                src={photo}
                                                className="card-img"
                                                alt="photo"
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{description}</h5>
                                                <p className="card-text">Place: {place}</p>
                                                <p className="card-text">Need: {need}</p>
                                                <div className="mt-3">
                                                    <button className="btn btn-primary mr-2 ms-2">Donate Clothing</button>
                                                    <button className="btn btn-primary mr-2 ms-2">Donate Money</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
