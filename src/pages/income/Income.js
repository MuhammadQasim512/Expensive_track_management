import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

export default function Income() {
    const [showModal, setShowModal] = useState(false)
    const [income, setIncome] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [formdata, setFormData] = useState({
        source: '',
        amount: '',
        description: '',

    })

    const fetchIncome = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/get/income', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Response data:", response.data);
            if (Array.isArray(response.data.result)) {
                setIncome(response.data.result)
            } else {
                console.error("Expected result to be an array:", response.data.result);
                setIncome([]);
            }
        } catch (error) {
            console.error("Error fetching income:", error);
            setIncome([]);
        }
    };
    useEffect(() => {
        fetchIncome();
    }, []);
    const handleCreate = async () => {
        try {

            const response = await axios.post('http://127.0.0.1:5000/api/add/income', formdata, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success("Income addad successfully!");
            if ((response.data.result)) {
                setIncome(response.data.result)
            } else {
                console.error("Expected result to be an array:", response.data.result);
                setIncome([]);
            }
        } catch (error) {
            console.error("Error fetching income:", error);
            setIncome([]);
        } finally {
            setShowModal(false);
        }
    }
    const confirmDelete = (id) => {
        setSelectedId(id);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirmed = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/api/delete/income/${selectedId}`);
            console.log('response:', response.data)
            toast.success("Income deleted successfully!");
            fetchIncome();
        } catch (error) {
            console.error("Error deleting income:", error);
            toast.error("Error deleting income. Please try again.");
        } finally {
            setShowDeleteModal(false);
            setSelectedId(null);
        }
    };
    const handleUpdate = async () => {

        try {
            const response = await axios.put(`http://127.0.0.1:5000/api/update/income/${selectedId}`, formdata);
            console.log('response put:', response)
            toast.success("Income update successfully!");
            fetchIncome();
            setShowModal(false);
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Error updating user. Please try again.");
        }
    };
    const handleEditClick = (item) => {
        setFormData({
            amount: item[1],
            source: item[2],
            description: item[3]
        });
        setSelectedId(item[0]);
        setShowModal(true);
    };


    const handleAddClick = () => {
        setFormData({
            source: '',
            amount: '',
            description: '',

        })
        setShowModal(true)
        setSelectedId(false)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const searchFun = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/get/income?amount=${searchTerm}`);
            setIncome(Array.isArray(response.data));  
            setIncome(response.data.result);
        } catch (error) {
            console.error("Error searching income:", error);
        }
    };


    return (

        <>
            <div className="income">
                <h3>Income data</h3>
                <div className="d-flex justify-content-end mb-2" >
                    <input
                        style={{ marginRight: '5px', width: '300px' }}
                        className="form-control"
                        placeholder="Search a amount"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                searchFun();
                            }
                        }}
                        type="text"
                    />
                    <button type="button" className="btn btn-secondary "
                        style={{
                            border: 'none', backgroundColor: '#255e7e',
                            color: 'white', borderRadius: "5px",
                        }} onClick={handleAddClick}>Add income
                    </button>
                </div>
                <table className="table" border="1" cellPadding="10" cellSpacing="1">
                    <thead>
                        <tr>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>#</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Amount</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Source</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Description</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Date</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Acton</th>

                        </tr>
                    </thead>
                    <tbody>
                        {income?.length > 0 ? income.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item[1]}</td>  
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-info me-1"
                                        onClick={() => handleEditClick(item)}>
                                        <i class="fas fa-edit"></i></button>
                                    <button type="button" className="btn btn-outline-info"
                                        onClick={() => confirmDelete(item[0])} >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )):<tr><td colSpan="8">No income found</td></tr>}

                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>

                {/* <!-- Modal --> */}
                <Modal show={showModal} onHide={handleClose} centered backdrop="static" keyboard={false}>
                    <Modal.Header style={{ backgroundColor: '#255e7e' }} >
                        <Modal.Title>{selectedId ? "Update Income" : "Add Income"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Amount</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter your course"
                                    value={formdata.amount}
                                    onChange={(e) => setFormData({ ...formdata, amount: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Sourse</label>
                                <input type="Amount" className="form-control"
                                    placeholder="Enter your amount"
                                    value={formdata.source}
                                    onChange={(e) => setFormData({ ...formdata, source: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">description</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter your password"
                                    value={formdata.description}
                                    onChange={(e) => setFormData({ ...formdata, description: e.target.value })} />
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ backgroundColor: 'red', border: 'none' }} onClick={handleClose}>
                            Close
                        </Button>
                        <Button style={{ backgroundColor: '#255e7e', border: 'none' }}
                            onClick={selectedId ? handleUpdate : handleCreate}>
                            {selectedId ? "Update" : "Save"}
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                    <Modal.Header>
                        <Modal.Title>Confirm Deletion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this expense?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                        <Button variant="danger" onClick={handleDeleteConfirmed}> Delete</Button>
                    </Modal.Footer>
                </Modal>
                <ToastContainer />
            </div>
        </>
    )
}