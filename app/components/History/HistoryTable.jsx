import React, { Component, PropTypes } from 'react'
import Table from 'react-bootstrap/lib/Table'
import Panel from 'react-bootstrap/lib/Panel'

class HistoryTable extends Component {
	constructor(props) {
		super(props)
	}
    rotate(array){
	   let temp = []
		   for (var i = array.length - 1; i >= 0; i--) {
		   	 temp.push(array[i])
		   }
	   return temp
    }
	render() {
		return (
			      <Table responsive>
					<thead>
						<tr>
							<th>Date</th>
							<th>Description</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{this.rotate(this.props.trans).map((value, key) => {
							return <tr key={key}>
								<td>{value.date}</td>
								<td>{value.description}</td>
								<td>{value.amount} USD</td>
							</tr>
						})}
					</tbody>
				</Table>
		)
	}
}

HistoryTable.propTypes = {
	trans: React.PropTypes.arrayOf(React.PropTypes.shape({
     date: React.PropTypes.string,
     amount: React.PropTypes.string,
     description: React.PropTypes.string  
   }))
}
export default HistoryTable