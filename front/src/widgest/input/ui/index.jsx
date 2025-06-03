import styles from './style.module.scss';

const Input = ({placeholder, value, onChange}) => {
    return (
        <>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </>
    );
};

export default Input;