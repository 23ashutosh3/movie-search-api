import React from 'react'

function Result({ result}) {
	return (
		<div className="result" >
			<div className="first">
			<img alt="poster" width="120" src={result.poster_src}/>
			</div>
			<div className="Second">
			<h3>{result.title}</h3>
			<p>{result.overview}</p>
			</div>
			
		</div>
	)
}

export default Result
