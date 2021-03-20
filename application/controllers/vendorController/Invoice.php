<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Invoice extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $sess = $this->session->userdata('role_id');
        if(empty($sess)) redirect('account/login'); 
        if($sess != 2) redirect('/');

        $this->load->model("invoices/M_Invoices");
        $this->load->library('form_validation');
    }
    
    public function getAllInvoicesByVendor(){

        try {
            $invoices = $this->M_Invoices;
            $res = $invoices->getAllByVendor();
            
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

    public function doCreateInvoice(){

        try {
            $invoices = $this->M_Invoices;
            $validation = $this->form_validation;
            $validation->set_rules($invoices->rules());

            if ($validation->run()) {
                $invoices->save();
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

    public function doDeleteInvoice($id){

        try {
            $invoices = $this->M_Invoices;
            $invoices->deleteInvoice($id);
            
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
        
    }

    public function doConfirmInvoice($id){

        try {
            $invoices = $this->M_Invoices;
            $invoices->confirmInvoice($id);
            
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
        
    }

    public function doCreateDetailInvoice(){

        try {
            $invoices = $this->M_Invoices;
            $validation = $this->form_validation;
            $validation->set_rules($invoices->rulesDetailInvoice());

            if ($validation->run()) {
                $invoices->saveDetailInvoice();
            }else{
                throw new Error("Please complete the form detail");
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

    public function doUpdateDetailInvoice($id){

        try {
            $invoices = $this->M_Invoices;
            $validation = $this->form_validation;
            $validation->set_rules($invoices->rulesDetailInvoice());

            if ($validation->run()) {
                $invoices->updateDetailInvoice($id);
            }else{
                throw new Error("Please complete the form detail");
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

    public function doDeleteDetailInvoice($id){

        try {
            $invoices = $this->M_Invoices;
            $invoices->deleteDetailInvoice($id);
            
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
