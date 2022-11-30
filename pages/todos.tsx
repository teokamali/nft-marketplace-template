import Test from "src/components/Home/Test/test";
import { useGetTodoByIdQuery, useGetTodoListQuery } from "src/api/todos/todos";

import { Fragment } from "react";

export default function Home() {
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTodoByIdQuery(1);
    const { data: list } = useGetTodoListQuery();

    console.log(todos && todos.userId, "get method");
    console.log(list && list[1], "get method");

    return (
        <Fragment>
            {list?.map((value, index) => {
                return (
                    <Test key={index} data={value} />
                )
            })

            }
        </Fragment>
    )
}
