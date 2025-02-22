
import { useIntl } from 'react-intl';


export const Book = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Gatza - Book</h1>
            <div>{formatMessage({ id: 'gatza' })}</div>
        </div>
    )
}