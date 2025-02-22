
import { useIntl } from 'react-intl';


export const MakingOf = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Gatza - Making of</h1>
            <div>{formatMessage({ id: 'gatza' })}</div>
        </div>
    )
}