<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
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
            if(count($checkUsers) == 0) throw new Error("E-mail or password is incorrect");
            
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
