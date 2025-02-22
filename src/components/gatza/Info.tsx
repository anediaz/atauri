
import { useIntl } from 'react-intl';


export const Info = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Gatza - Info</h1>
            <div>{formatMessage({ id: 'gatza' })}</div>
        </div>
    )
}