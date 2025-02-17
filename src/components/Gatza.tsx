
import { useIntl } from 'react-intl';


export const Gatza = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Gatza</h1>
            <div>{formatMessage({ id: 'gatza' })}</div>
        </div>
    )
}