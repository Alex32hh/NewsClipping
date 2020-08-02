import React, { useState, useEffect } from 'react';

export default function Scrollable() {
    const [referenceNode, setReferenceNode] = useState();
    const [listItems] = useState(Array.from(Array(30).keys(), (n) => n + 1));

    useEffect(() => {
        return () => referenceNode.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll(event) {
        var node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        if (bottom) {
            console.log('BOTTOM REACHED:', bottom);
        }
    }

    const paneDidMount = (node) => {
        if (node) {
            node.addEventListener('scroll', handleScroll);
            setReferenceNode(node);
        }
    };

    return (
        <div
            ref={paneDidMount}
            style={{ overflowY: 'scroll', maxHeight: '400px' }}
        >
            <ul>
                {listItems.map((listItem) => <li>List Item {listItem}</li>)}
            </ul>
        </div>
    );
}