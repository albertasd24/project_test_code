
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import './Stadisticas.css';
import 'chart.js/auto'; // Asegúrate de incluir esto para cargar los elementos necesarios de Chart.js
import DataTable from 'react-data-table-component';

const Stadisticas = () => {

	// Datos para el gráfico Doughnut
	const data = {
		labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'],
		datasets: [
			{
				label: 'My Doughnut Chart',
				data: [12, 19, 3, 5, 2, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(166, 206, 227)',
					'rgba(130, 50, 140)'
				],
				borderColor: [
					'rgba(166, 206, 227)',
					'rgba(130, 50, 140)'
				],
				borderWidth: 1
			}
		]
	};
	const dataLine = {
		labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'],
		datasets: [
			{
				label: 'My Doughnut Chart',
				data: [12, 19, 3, 5, 2, -10, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(166, 206, 227)'
				],
				tension: 0.5,
				pointRadius: 5,
				fill: true,
				borderColor: [
					'rgba(130, 50, 140)'
				],
				borderWidth: 1
			}
		]
	};
	const data2 = {
		labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'],
		datasets: [
			{
				label: 'My Doughnut Chart',
				data: [12, 19, 3, 5, 2, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(178, 223, 138)',
					'rgba(51, 160, 44)',
					'rgba(251, 154, 153)',
					'rgba(166, 206, 227)',
					'rgba(31, 120, 180)',
				],
				borderColor: [
					'rgba(178, 223, 138)',
					'rgba(51, 160, 44)',
					'rgba(251, 154, 153)',
					'rgba(166, 206, 227)',
					'rgba(31, 120, 180)',
				],
				borderWidth: 1
			}
		]
	};
	const columns = [
		{
			name: 'Nombre',
			selector: row => row.name,
			sortable: true
		},
		{
			name: 'Apellido',
			selector: row => row.apellido
		},
		{
			name: 'Edad',
			selector: row => row.edad
		},
		{
			name: 'Acciones',
			cell: row => (
				<div>
					<button onClick={() => handleEdit(row)}>Editar</button>
					<button onClick={() => handleDelete(row)}>Eliminar</button>
				</div>
			),
		},
	]
	const dataPeoples = [
		{
			name: 'Juan',
			apellido: 'Perez',
			edad: 25
		},
		{
			name: 'Ana',
			apellido: 'Garcia',
			edad: 30
		},
		{
			name: 'Pedro',
			apellido: 'Rodriguez',
			edad: 28
		},
		{
			name: 'Maria',
			apellido: 'Martinez',
			edad: 22
		}
		,
		{
			name: 'Maria',
			apellido: 'Martinez',
			edad: 22
		}
		,
		{
			name: 'Maria',
			apellido: 'Martinez',
			edad: 22
		}
	]
	const paginationComponentOptions = {
		rowsPerPageText: 'Filas por página',
		rangeSeparatorText: 'de',
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Todos',
	};

	const handleEdit = row => {
		console.log('Edit', row);
		// Agrega tu lógica de edición aquí
	};

	const handleDelete = row => {
		console.log('Delete', row);
		// Agrega tu lógica de eliminación aquí
	};
	return (
		<div className='stadisticas'>
			<h2>Stadisticas Works!</h2>
			<Bar data={data} />
			<Doughnut data={data2} />
			<Line data={dataLine} />
			<DataTable columns={columns} data={dataPeoples} pagination paginationComponentOptions={paginationComponentOptions} selectableRows={true} />
		</div>
	);
};

export default Stadisticas;
