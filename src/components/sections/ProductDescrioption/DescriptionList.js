import { useState } from 'react';
import DescriptionItem from './DescriptionItem';
import useDebounce from '../../../hooks/useDebounce';

export default function DescriptionList({ data }) {
    const [open, setOpen] = useState('technical');

    const debouncedFunction = useDebounce();

    const handleToggle = (section) => {
        setOpen((prev) => (prev === section ? '' : section));
    };
 
    const sections = [
        { key: 'technical', label: 'Specifications', content: data?.technicalSpecifications },
        { key: 'maintenance', label: 'Care', content: data?.maintenance },
        { key: 'packing', label: 'Packaging', content: data?.packing },
        { key: 'description', label: 'Product description', content: [data?.productDescription, data?.images, data?.advantages] },
    ];

    return (
        <ul className="show-descriptions">
            {sections.map(({ key, label, content }) => (
                <DescriptionItem
                    key={key}
                    sectionKey={key}
                    label={label}
                    content={content}
                    open={open}
                    onToggle={() => debouncedFunction(500, () => {
                        handleToggle(key);
                    })}

                />
            ))}
        </ul>
    );
}
