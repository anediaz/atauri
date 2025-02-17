import { useIntl } from 'react-intl';

export const Home = () => {
    const { formatMessage } = useIntl();

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <div>{formatMessage({ id: 'home' })}</div>
        </div>
    )
}