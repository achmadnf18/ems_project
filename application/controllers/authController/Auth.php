<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $sess = $this->session->userdata('role_id');
        if(!empty($sess) && uri_string() != 'auth/logout'){
            if($sess == 1) redirect('admin/manage/invoice');
            if($sess != 1) redirect('vendor/manage/invoice');
        }

        $this->load->model("users/M_Users");
        $this->load->library('form_validation');
    }

	public function login()
	{
		$data['main'] = 'users/login';
		$this->load->view('layouts/template', $data);
    }

    public function register()
	{
		$data['main'] = 'users/register';
		$this->load->view('layouts/template', $data);
    }
    
    public function doLogin(){

        try {
            $users = $this->M_Users;
            $validation = $this->form_validation;
            $validation->set_rules($users->rulesLogin());

            if(!$validation->run()) throw new Error("Please complete the form");

            $checkUsers = $users->getUserByEmailPassword();
            if(!$checkUsers) throw new Error("E-mail or password is incorrect");
            
            $sess = array(
                'id' => $checkUsers->id,
                'role_id' => $checkUsers->role_id
            );
            $this->session->set_userdata($sess);

            echo json_encode($checkUsers);
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
    }

    public function doLogout(){
        try{
            $this->session->sess_destroy();
            
            redirect('account/login');
        }catch(Error $e){
            $res = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            http_response_code(400);
            echo json_encode($res);
        }
    }

    public function doRegister(){

        try {
            $users = $this->M_Users;
            $validation = $this->form_validation;
            $validation->set_rules($users->rules());

            $checkUsers = $users->getUserByCredentials();
            if(count($checkUsers) >= 1) throw new Error("Username or E-mail already registered");

            if ($validation->run()) {
                $users->save();
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
