
import { modalStore } from '../../../stores/modalStore';

export default function Navigation({ activeTab }) {
    const { toggleCart, isCartOpen } = modalStore();

     const tabs = [
        { id: 'information', label: 'Information' },
        { id: 'delivery', label: 'Delivery' },
        { id: 'payment', label: 'Payment' },
    ];

     const getColor = (condition) => (condition ? 'var(--black)' : 'inherit');

    return (
        <div className="form-steps row gap-5 wrap xxxsmall-text text-main text-gray up-case">
            <span
                style={{ color: getColor(isCartOpen) }}
                onClick={toggleCart}
            >
                Cart
            </span>

             {tabs.map((tab) => (
                <span
                    key={tab.id}
                    style={{ color: getColor(activeTab === tab.id) }}
                  
                >
                    /&nbsp;&nbsp;{tab.label}
                </span>
            ))}
        </div>
    );
}
