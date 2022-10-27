import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';

const UserProfile = () => {
    const { user, loading, updateUser } = useContext(AuthContext);

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin mx-auto dark:border-green-700"></div>
    }



    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const photoUrl = form.photoUrl.value;

        if (photoUrl === '' || name === '') {
            return alert('Enter Input Field')
        }

        updateUser(name, photoUrl)
            .then(() => {
                toast.success('User Profile Updated')
            })
            .catch(e => console.error(e))
    }


    return (
        <>

            {user ? <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Check and Edit Your Profile
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                        This is Your Profile Page. You can edit or add profile Info If you wan to.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={user.photoURL}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold">{user.displayName}</p>
                            <p className="mb-5 text-xs text-gray-800">{user.email}</p>
                        </div>
                    </div>
                </div>

                <form className="mb-8 space-y-4" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Update Full Name</span>
                        <input className="form-input" name='name' type="text" placeholder="Enter Your Full Name" />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Update Photo URL</span>
                        <input className="form-input" name='photoUrl' type="text" placeholder="Enter Photo URL" />
                    </label>
                    <input type="submit" className="w-full text-white text-lg cursor-pointer py-3 mt-1 bg-[#6cc17e] hover:bg-[#6dcd82] transition-all" value="Update Profile" />
                </form>
                <Link className='bg-yellow-400 py-2 px-4 shadow-sm text-lg' to="/password-reset">Change Password</Link>
            </div> :

                <Navigate to='/login' />

            }
        </>
    );
};

export default UserProfile;