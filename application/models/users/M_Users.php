<?php defined('BASEPATH') OR exit('No direct script access allowed');

class M_Users extends CI_Model
{
    private $_table = "users";

    public $id;
    public $email;
    public $username;
    public $password;

    public function rules()
    {
        return [
            ['field' => 'email',
            'label' => 'email',
            'rules' => 'required'],

            ['field' => 'username',
            'label' => 'username',
            'rules' => 'required'],

            ['field' => 'password',
            'label' => 'password',
            'rules' => 'required'],
        ];
    }

    public function rulesLogin()
    {
        return [
            ['field' => 'email',
            'label' => 'email',
            'rules' => 'required'],

            ['field' => 'password',
            'label' => 'password',
            'rules' => 'required'],
        ];
    }

    public function rulesUpdate()
    {
        return [
            ['field' => 'email',
            'label' => 'email',
            'rules' => 'required'],
            
            ['field' => 'username',
            'label' => 'username',
            'rules' => 'required'],
        ];
    }

    public function getUserByCredentials()
    {
        $post = $this->input->post();
        $email = $post["email"];
        $username = $post["username"];

        return $this->db->query("
            SELECT * 
            FROM `users` 
            WHERE (`email`= '$email' OR `username`= '$username')"
        )->result();
    }

    public function getUserByEmailPassword()
    {
        $post = $this->input->post();
        $email = $post["email"];
        
        $resUser = $this->db->query("
            SELECT * 
            FROM `users` 
            WHERE (`email`= '$email')"
        );

        $isPasswordTrue = password_verify($post["password"], $resUser->row()->password);
        if(!$isPasswordTrue) return [];
        return $resUser->result();
    }

    public function getAll()
    {
        return $this->db->get($this->_table)->result();
    }
    
    public function getById($id)
    {
        return $this->db->get_where($this->_table, ["id" => $id])->row();
    }

    public function save()
    {
        $post = $this->input->post();
        $this->email = $post["email"];
        $this->username = $post["username"];
        $this->password = password_hash($post["password"], PASSWORD_DEFAULT);
        return $this->db->insert($this->_table, $this);
    }

    public function update($id)
    {
        $post = $this->input->post();
        $this->email = $post["email"];
        $this->username = $post["username"];
        if(isset($post['password'])) $this->password = password_hash($post["password"], PASSWORD_DEFAULT);
        
        return $this->db->update($this->_table, $this, array('id' => $id));
    }

    public function delete($id)
    {
        $post = $this->input->post();
        $this->row_status = "-1";
        return $this->db->update($this->_table, $this, array('id' => $post['id']));
    }
}