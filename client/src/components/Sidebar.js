import React from 'react';

function Sidebar({ setPage }) {
    return (
        <aside>
            <nav>
                <ul>
                    <li onClick={() => setPage("Dashboard")}>Dashboard</li>
                    <li onClick={() => setPage("Spending")}>Spending</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
