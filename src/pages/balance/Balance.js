import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";

export default function Balance() {
    const [showModal, setShowModal] = useState(false)
    const [balance, setBalance] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [formdata, setFormData] = useState({
        total_income: '',
        total_expens: '',
        current_balance: '',
    })

    const fetchBalance = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/get/balance', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("response:", response.data)
            if (Array.isArray(response.data.result)) {
                setBalance(response.data.result)
            } else {
                console.error("Expected result to be an array:", response.data.result);
                setBalance([]);
            }
        } catch (error) {
            console.error("Error fetching income:", error);
            setBalance([]);
        }
    };
    useEffect(() => {
        fetchBalance();
    }, [])

    const handleCreate = async () => {
        try {

            const response = await axios.post('http://127.0.0.1:5000/api/add/balance', formdata,);
            console.log("post response:", response.data)
            toast.success('Data added successfully')
            if ((response.data.result)) {
                setBalance(response.data.result)
            } else {
                console.error("Expected result to be an array:", response.data.result);
                setBalance([]);
            }
        } catch (error) {
            console.error("Error fetching income:", error);
            setBalance([]);
        } finally {
            setShowModal(false)
            setSelectedId(null)
        }
    }

    const handleUpdate = async () => {

        try {
            const response = await axios.put(`http://127.0.0.1:5000/api/update/balance/${selectedId}`, formdata);
            console.log('response put:', response)
            toast.success("Income update successfully!");
            fetchBalance();
            setShowModal(false);
        } catch (error) {
            console.error("Error updating expens:", error);
            alert("Error updating expens. Please try again.");
        } finally {
            setShowModal(false);
            setSelectedId(null);
        }
    };
    const handleEditClick = (item) => {
        setFormData({
            total_income: item[1],
            total_expens: item[2],
            current_balance: item[3],
        });
        setSelectedId(item[0]);
        setShowModal(true);

    };

    const confirmDelete = (id) => {
        setSelectedId(id);
        setShowDeleteModal(true);
    };
    const handleDeleteConfirmed = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/api/delete/balance/${selectedId}`);
            console.log('response:', response.data)
            toast.success("Balance deleted successfully!");
            fetchBalance();
        } catch (error) {
            console.error("Error deleting balance:", error);
            toast.error("Error deleting balance. Please try again.");
        } finally {
            setShowDeleteModal(false);
            setSelectedId(null)
        }
    };

    const handleAddClick = () => {
        setFormData({
            total_income: '',
            total_expens: '',
            current_balance: '',
        });
        setSelectedId(null);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }
    const searchFun = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/get/balance?total_income=${searchTerm}`);
            setBalance(Array.isArray(response.data.result)); {
                setBalance(response.data.result);
            }
        } catch (error) {
            console.error("Error searching balance:", error);
        }
    };
    


    return (
        <>
            <div className="income">
                <h3>Balance data</h3>
                <div className="d-flex justify-content-end mb-2" >
                    <input
                        className="form-control"
                        style={{ marginRight: '5px', width: '300px' }}
                        type="text"
                        placeholder="Search a total income"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}  
                        onKeyDown={searchFun}  
                        
                    />
                    < button type="button" classname="btn btn-secondary "
                        style={{
                            border: 'none', backgroundColor: '#255e7e',
                            color: 'white', borderRadius: "5px",
                        }} onClick={handleAddClick}>Add Balance</button>
                </div>

                <table className="table" border="1" cellPadding="10" cellSpacing="1">
                    <thead>
                        <tr>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>#</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Total income</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Total expens</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Current balancce</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Created at</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Acton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {balance?.length > 0 ? balance.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-info me-1"
                                        onClick={() => handleEditClick(item)}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-info"
                                        onClick={() => confirmDelete(item[0])}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )) : <tr><td colSpan="8">No balance found</td></tr>}

                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                <Modal show={showModal} centered backdrop="static" keyboard={false}>
                    <Modal.Header style={{ backgroundColor: '#255e7e' }}>
                        <Modal.Title>{selectedId ? "Update balance" : "Add balance"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Total income</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter your course"
                                    value={formdata.total_income}
                                    onChange={(e) => setFormData({ ...formdata, total_income: e.target.value })} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Total expens</label>
                                <input type="Amount" className="form-control"
                                    placeholder="Enter your amount"
                                    value={formdata.total_expens}
                                    onChange={(e) => setFormData({ ...formdata, total_expens: e.target.value })} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Current balancce</label>
                                <input type="Amount" className="form-control"
                                    placeholder="Enter your amount"
                                    value={formdata.current_balance}
                                    onChange={(e) => setFormData({ ...formdata, current_balance: e.target.value })} />
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
                    <Modal.Header >
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
            </div >
        </>
    )
}