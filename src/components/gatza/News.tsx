
import { useIntl } from 'react-intl';


export const News = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Gatza - News</h1>
            <div>{formatMessage({ id: 'gatza' })}</div>
        </div>
    )
}