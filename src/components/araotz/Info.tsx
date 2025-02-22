import { useIntl } from 'react-intl';

export const Info = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Araotz - Info</h1>
            <div>{formatMessage({ id: 'araotz' })}</div>
        </div>
    )
}