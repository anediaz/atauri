import { useIntl } from 'react-intl';

export const MakingOf = () => {
    const { formatMessage } = useIntl();
    return (
        <div>
            <h1>Araotz - MakingOf</h1>
            <div>{formatMessage({ id: 'araotz' })}</div>
        </div>
    )
}