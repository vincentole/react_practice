import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { uiActions } from '../../store/ui-slice';

const ErrorToast: React.FC = () => {
    const errorToast = useSelector((state: RootState) => state.ui.errorToast);
    const dispatch = useDispatch<AppDispatch>();
    const isShowing = errorToast !== null;

    useEffect(() => {
        const timeout = setTimeout(() => dispatch(uiActions.showErrorToast(null)), 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [dispatch, errorToast]);

    let classes = '';
    if (isShowing) {
        if (errorToast.status === 'success') {
            classes = 'bg-green-600';
        }

        if (errorToast.status === 'pending') {
            classes = 'bg-amber-600';
        }

        if (errorToast.status === 'error') {
            classes = 'bg-red-600';
        }
    }

    return (
                
                <div aria-live='polite' className={`absolute min-w-full px-4 py-2 text-gray-200 ${classes}`}>
                    <div className='max-w-4xl mx-auto flex justify-end gap-4'>
                        <div>{isShowing ? errorToast.title : ''}</div>
                        <div>{isShowing ? errorToast.message : ''}</div>
                    </div>
                </div>
    );
};

export default ErrorToast;
