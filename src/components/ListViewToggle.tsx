import { BsFillGridFill, BsList } from 'react-icons/bs';

interface ListViewProps {
    onToggle: () => void;
    layout: string;
}

const ListViewToggle = ({ onToggle, layout }: ListViewProps) => {
    const setActiveStyles = (pattern: string) => {
        return `text-xl btn btn-circle btn-sm ${
            pattern === layout
                ? 'btn-primary text-primary-content'
                : 'btn-ghost text-based-content'
        }`;
    };

    return (
        <div className="mb-4 flex gap-x-2">
            <button
                type="button"
                onClick={onToggle}
                className={setActiveStyles('grid')}
            >
                <BsFillGridFill />
            </button>
            <button
                type="button"
                onClick={onToggle}
                className={setActiveStyles('list')}
            >
                <BsList />
            </button>
        </div>
    );
};

export default ListViewToggle;
