import { Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface DataType {
	id: number;
	task: string;
	progress: string;
	note: string;
}

const API = import.meta.env.VITE_API

const TableTodo = () => {
	const [list, setList] = useState([]);
	const columns: TableProps<DataType>['columns'] =
		[
			{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
				render: (text) => <a>{text}</a>,
			},
			{
				title: 'Task',
				dataIndex: 'task',
				key: 'task',
			},
			{
				title: 'Note',
				dataIndex: 'note',
				key: 'note',
			},
			{
				title: 'Progress',
				dataIndex: 'progress',
				render: (_, record) => {
					const color = record.progress === "ON GOING" ? "geekblue" : "green";
					return (
						<Tag color={color}>
							{record.progress}
						</Tag>
					);
				}
			}
		];

	const showTodos = async () => {
		try {
			const { data } = await axios.get(`${API}/todos`);
			setList(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		showTodos()
	}, [])
	console.log(list)
	console.log(API)
	return (
		<div style={{ paddingLeft: 32, paddingRight: 32 }}>
			<Table columns={columns} dataSource={list} />
		</div>
	)
}

export default TableTodo