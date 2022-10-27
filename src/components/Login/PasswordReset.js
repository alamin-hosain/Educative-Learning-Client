import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/ContextProvider';

const PasswordReset = () => {
    const { passwordReset } = useContext(AuthContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        passwordReset(email)
            .then(() => {
                toast.success('Password Resent Link Sent. Check Inbox or Spam Folder')
                e.target.reset();
            })
            .catch(e => console.error(e.message))
    }


    return (
        <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4 header">
            <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
                <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">Password Reset</h1>
                <form className="mb-8 space-y-4" onSubmit={handleFormSubmit}>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Enter Registered Email to Reset Password</span>
                        <input className="form-input" name='email' type="email" placeholder="Ex. james@bond.com" required />
                    </label>

                    {/* <div className='text-red-600 mb-0'>{error.message}</div> */}
                    <input type="submit" className="w-full text-white text-lg cursor-pointer py-3 mt-1 bg-[#6cc17e] hover:bg-[#6dcd82] transition-all" value='Reset Password' />
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;