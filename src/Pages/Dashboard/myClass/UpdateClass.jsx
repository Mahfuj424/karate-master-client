import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const navigate = useNavigate();

    const allClass = useLoaderData();
    const { id } = useParams();
    console.log(allClass);

    const singleClass = allClass && allClass.find(data => data._id == id)
    console.log(singleClass);

    const { price, image, className, _id, availableSeats } = singleClass;



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value;
        const image = form.image.value;
        const price = form.price.value;
        const availableSeats = form.seat.value;
        console.log(className, image, price);
        const updateClass = { className, image, price, availableSeats }

        fetch(`https://martial-arts-server-blush.vercel.app/addClass/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/dashboard/myClass')
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })




    }

    return (
        <div>
            <div className="hero min-h-screen mt-5">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center text-white">Update Class</h1>

                    </div>
                    <div className="card  flex-shrink-0 w-96 max-w-sm shadow-2xl bg-gray-500">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Image</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} placeholder="Image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Class Name</span>
                                </label>
                                <input type="text" name='className' defaultValue={className} placeholder="Class Name" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Available Seats</span>
                                </label>
                                <input type="text" name='seat' defaultValue={availableSeats} placeholder="Available Seats" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Price</span>
                                </label>
                                <input type="number" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gray-600 border-none text-white hover:bg-gray-600" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateClass;