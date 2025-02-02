import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
    // State variables for each form field
    let [apiUrl, setApiUrl] = useState("");
    let [apiMethod, setApiMethod] = useState("GET");
    let [apiBody, setApiBody] = useState("");
    let [apiResponse, setApiResponse] = useState("");

    // Function to handle the form submission
    const submitApi = async () => {
        console.log("API URL: ", apiUrl);
        console.log("API Method: ", apiMethod);
        console.log("API Body: ", apiBody);

        // You can also implement the API call here using fetch or axios
        const apiResult = await fetch(apiUrl, {
            method: apiMethod
        }).then(response => response.json()).catch(err => err.message);

        console.log("apiResult: ", apiResult)
        setApiResponse(JSON.stringify(apiResult, null, 2))
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Enter the API URL:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="https://apiBaseUrl/path.com" 
                    value={apiUrl} 
                    onChange={(e) => setApiUrl(e.target.value)} // Update state
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter API Method:</Form.Label>
                <Form.Select 
                    value={apiMethod} 
                    onChange={(e) => setApiMethod(e.target.value)} // Update state
                >
                    <option>Select API method</option>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>API Body:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={apiBody} 
                    onChange={(e) => setApiBody(e.target.value)} // Update state
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Select API library/method:</Form.Label>
                <Form.Select 
                >
                    <option>select an option</option>
                    <option value="Fetch">Fetch</option>
                    <option value="Axios">Axios</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>API Response:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={6} 
                    value={apiResponse} 
                    readOnly // Make this field read-only
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Button variant="primary" onClick={submitApi}>Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default TextControlsExample;