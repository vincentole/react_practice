import { useRef, useState } from 'react';
import Button from '../../global/Button';
import ButtonSecondary from '../../global/ButtonSecondary';
import InputWithLabel from '../../global/InputWithLabel';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

function OrderForm(props) {
    const [inputIsValidState, setInputIsValidState] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
    });
    const nameRef = useRef(null);
    const streetRef = useRef(null);
    const postalRef = useRef(null);
    const cityRef = useRef(null);

    function submitHandler(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const street = nameRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const cityIsValid = !isEmpty(city);
        const postalIsValid = isFiveChars(postal);

        const formIsValid = nameIsValid && streetIsValid && cityIsValid && postalIsValid;

        setInputIsValidState({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid,
        });

        if (!formIsValid) {
            return;
        }

        props.onSubmit({
            name: name,
            street: street,
            postal: postal,
            city: city,
        });
    }

    const nameInputClasses = `w-full max-w-[15rem] ${!inputIsValidState.name && 'bg-rose-200 border-rose-400'}`;
    const streeInputClasses = `w-full max-w-[15rem] ${!inputIsValidState.street && 'bg-rose-200 border-rose-400'}`;
    const postalInputClasses = `w-full max-w-[15rem] ${!inputIsValidState.postal && 'bg-rose-200 border-rose-400'}`;
    const cityInputClasses = `w-full max-w-[15rem] ${!inputIsValidState.city && 'bg-rose-200 border-rose-400'}`;

    return (
        <form onSubmit={submitHandler} className='space-y-4'>
            <div className='border-t'></div>
            <div>
                <div>
                    <InputWithLabel
                        inputId='name'
                        label='Your Name'
                        className={nameInputClasses}
                        labelClassName='inline-block w-[100px]'
                        ref={nameRef}
                    />
                </div>
                {!inputIsValidState.name && (
                    <p className='text-sm text-red-500 pb-2 pt-1'>Please enter a valid name.</p>
                )}
                <div>
                    <InputWithLabel
                        inputId='street'
                        label='Street'
                        className={streeInputClasses}
                        labelClassName='inline-block w-[100px]'
                        ref={streetRef}
                    />
                </div>
                {!inputIsValidState.street && (
                    <p className='text-sm text-red-500 pb-2 pt-1'>Please enter a valid street.</p>
                )}
                <div>
                    <InputWithLabel
                        inputId='postal_code'
                        label='Postal Code'
                        type='number'
                        step={1}
                        min={0}
                        max={99999}
                        className={postalInputClasses}
                        labelClassName='inline-block w-[100px]'
                        ref={postalRef}
                    />
                </div>
                {!inputIsValidState.postal && (
                    <p className='text-sm text-red-500 pb-2 pt-1'>
                        Please enter a valid postal code (5 characters long).
                    </p>
                )}
                <div>
                    <InputWithLabel
                        inputId='city'
                        label='City'
                        className={cityInputClasses}
                        labelClassName='inline-block w-[100px]'
                        ref={cityRef}
                    />
                </div>
                {!inputIsValidState.city && (
                    <p className='text-sm text-red-500 pb-2 pt-1'>Please enter a valid city.</p>
                )}
            </div>

            <footer className='flex justify-end gap-2'>
                <ButtonSecondary className='w-20' onClick={props.onCancelOrdering}>
                    Cancel
                </ButtonSecondary>
                <Button type='submit' className='w-20'>
                    Confirm
                </Button>
            </footer>
        </form>
    );
}

export default OrderForm;
