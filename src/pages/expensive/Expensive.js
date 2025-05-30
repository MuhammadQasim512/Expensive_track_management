import React, { useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";

export default function Expensive() {

    const [showModal, setShowModal] = useState(false);
    const [expens, setExpens] = useState();
     const [searchTerm, setSearchTerm] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const [formdata, setFormData] = useState({
        expens_name: '',
        price: '',
        quantity: '',

    })
    const fetchExpens = async () => {

        try {

            const response = await axios.get('http://127.0.0.1:5000//api/get/expens', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Response status:", response);
            console.log("Response data:", response.data);
            if (Array.isArray(response.data.result)) {
                setExpens(response.data.result)
            } else {
                console.error("Expected result to be an array:", response.data.result);
                setExpens([]);
            }
        } catch (error) {
            console.error("Error fetching expens:", error);
            setExpens([]);
        }
    }

    useEffect(() => {
        fetchExpens();
    }, []);


    const handleCreate = async () => {
        try {

            const response = await axios.post('http://127.0.0.1:5000/api/expens', formdata, {
            });
            toast.success("Expens addad successfully!");

            if (Array.isArray(response.data.result)) {
                setExpens(response.data.result)
            } else {
                console.error("Expected result to be an array:", response.data.result);
                setExpens([]);
            }
        } catch (error) {
            console.error("Error fetching income:", error);
            setExpens([]);
        } finally {
            setShowModal(false);
            setSelectedId(null);
        }
    }

    const confirmDelete = (id) => {
        setSelectedId(id);
        setShowDeleteModal(true);
    };
    const handleDeleteConfirmed = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/api/delete/expens/${selectedId}`);
            console.log('response:', response.data)
            toast.success("Expens deleted successfully!");
            fetchExpens();
        } catch (error) {
            console.error("Error deleting expens:", error);
            toast.error("Error deleting expens. Please try again.");
        } finally {
            setShowDeleteModal(false);
        }
    };
    const handleUpdate = async () => {

        try {
            const response = await axios.put(`http://127.0.0.1:5000/api/update/expens/${selectedId}`, formdata);
            console.log('response put:', response)
            toast.success("Income update successfully!");
            fetchExpens();
            setShowModal(false);
        } catch (error) {
            console.error("Error updating expens:", error);
            alert("Error updating expens. Please try again.");
        }
    };
    const handleEditClick = (item) => {
        setFormData({
            expens_name: item[1],
            price: item[2],
            quantity: item[3],
        });
        setSelectedId(item[0]);
        setShowModal(true);
    };
    const handleAddClick = () => {
        setFormData({
            expens_name: '',
            price: '',
            quantity: '',
        })
        setShowModal(true)
        setSelectedId(false)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const searchFun = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/get/expens?expens_name=${searchTerm}`);
            setExpens(Array.isArray(response.data));
            setExpens(response.data.result);
        } catch (error) {
            console.error("Error searching income:", error);
        }
    };


    return (

        <>
            <div className="income">
                <h3>Expensive table</h3>
                <div className="d-flex justify-content-end mb-2" >
                    <input
                        className="form-control"
                        style={{ marginRight: '5px', width: '300px' }}
                        type="text"
                        placeholder="Search a expens by name"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                searchFun();
                            }
                        }}
                    />
                    <button type="button" classname="btn btn-secondary"
                        style={{
                            border: 'none', backgroundColor: '#255e7e',
                            color: 'white', borderRadius: "5px"
                        }} onClick={handleAddClick}>Add expensive</button>
                </div>
                <table className="table" border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>#</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Expens name</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Price</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Quantity</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Total price</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Total quantity</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Created at</th>
                            <th style={{ color: 'white', backgroundColor: '#255e7e' }}>Acton</th>

                        </tr>
                    </thead>
                    <tbody>

                        {expens?.length > 0 ? expens.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
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
                        )) : <tr><td colSpan="8">No expenses found</td></tr>}



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
                <Modal show={showModal} centered backdrop="static" keyboard={false}>
                    <Modal.Header style={{ backgroundColor: '#255e7e' }}>
                        <Modal.Title>{selectedId ? "Update expense" : "Add expense"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Expens name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter expense name"
                                    value={formdata.expens_name}
                                    onChange={(e) => setFormData({ ...formdata, expens_name: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter price"
                                    value={formdata.price}
                                    onChange={(e) => setFormData({ ...formdata, price: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter quantity"
                                    value={formdata.quantity}
                                    onChange={(e) => setFormData({ ...formdata, quantity: e.target.value })}
                                />
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


                {/* delete modal */}


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
            </div>
        </>
    )
}