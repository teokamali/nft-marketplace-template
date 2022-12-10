import React from "react";
import Test from "src/components/Home/Test/test";

function HomePage() {
    return (
        <div>
            <Test
                data={{ userId: 1, id: 1, title: "string", completed: false }}
            />
        </div>
    );
}

export default HomePage;
