/* import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
//import './pdf.css'

//PDFjs worker from an external cdn

//link to resume pdf
const url = "https://cors-anywhere.herokuapp.com/https://jade-meade-38.tiiny.site/"

export default function Test() {
	
	pdfjs.GlobalWorkerOptions.workerSrc =
	`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
return (
	<>
	<div className="main">
	<Document
		file={url}
		>
	</Document>
	</div>
	</>
);
} */

import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends Component {
	state = { numPages: null, pageNumber: 1 };

  //onDocumentLoadSuccess: set up state of page number when pdf is loaded successfully 
	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }
      

	render() {
		const { pageNumber, numPages } = this.state;

		return (
			<div>
				<nav>
					<button onClick = {this.goToPrevPage}> Prev </button>
					<button onClick = {this.goToNextPage}> Next </button>
				</nav>

				<div style={{ width: 600 }}>
					<Document
						file = "/my-app/src/sample.pdf"
						onLoadSuccess={this.onDocumentLoadSuccess}
					>
						<Page pageNumber = {pageNumber} width = {600} />
					</Document>
				</div>

				<p>
					Page {pageNumber} of {numPages}
				</p>
			</div>
		);
	}
}

