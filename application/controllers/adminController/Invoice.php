<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Invoice extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $sess = $this->session->userdata('role_id');
        if(empty($sess)) redirect('account/login'); 
        if($sess != 1) redirect('/');

        $this->load->model("invoices/M_Invoices");
        $this->load->library('form_validation');
    }
    
    public function getAllInvoices(){

        try {
            $invoices = $this->M_Invoices;
            $res = $invoices->getAll();
            
            echo json_encode($res);
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
    }

    public function getListDetailInvoice($id){

        try {
            $invoices = $this->M_Invoices;
            $res = $invoices->getListDetailInvoice($id);
            
            echo json_encode($res);
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
    }

    public function getUserById($id){

        try {
            $users = $this->M_Users;
            $res = $users->getById($id);
            
            echo json_encode($res);
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
    }

    public function doUpdate($id){

        try {
            $users = $this->M_Users;
            $validation = $this->form_validation;
            $validation->set_rules($users->rulesUpdate());

            $checkUsers = $users->getUserByCredentials();
            if(count($checkUsers) >= 1) throw new Error("Username or E-mail already registered");

            if ($validation->run()) {
                $users->update($id);
            }else{
                throw new Error("Please complete the form");
            }
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
        
    }
}
