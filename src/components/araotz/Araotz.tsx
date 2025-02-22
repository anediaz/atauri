import { useIntl } from 'react-intl';

export const Araotz = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Araotz</h1>
            <div>{formatMessage({ id: 'araotz' })}</div>
        </div>
    )
}