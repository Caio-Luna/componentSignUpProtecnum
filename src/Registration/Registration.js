import React from "react";
import { useFormik } from "formik";
import "./Registration.css";
import { Button } from "react-bootstrap";
import { registrationSchema } from "./RegistrationSchema";
import CadastroImage from "../assets/cadastro.jpg"
import LogoImage from "../assets/logo-protecnum.png"
import BackgroundImage from "../assets/background.jpg"

const initialValues = {
  empresa: "",
  cnpj: "",
  email: "",
  repassword: "",
  password: "",
};

const Registration = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      alert(
        "Cadastrado com sucesso! Agora você pode acessar o sistema para efetuar seu pedido."
      );
      action.resetForm();
    },
  });

  return (
    <div>
      <section
        class="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,          
          backgroundSize: "100% 100%",
          height:"100vh",
          maxWidth: "100%",
          overflow: "hidden",           
          
        }}
      >       
      
        <div id="container" className="container">
          <div class="row justify-content">
            <div class="col-12">
              <div class="card text-black" style={{borderRadius: "25px"}}>
                <div class="card-body p-md-5">
                  <div class="row">
                    <div  class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div className="text-center">
                        <img src={LogoImage} 
                          className="img-fluid" 
                          width={160}
                          alt="Cadastro-Protecnum" 
                        /> 
                      </div>                    
                      <p class="text-center fw-bold mb-3 mt-4">Sistema de pedidos para revendedores</p>                    
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col text-left">
                            <label htmlFor="empresa" className="form-label">
                              Empresa
                            </label>
                            <input
                              id="empresa"
                              name="empresa"
                              className="form-control"
                              value={values.empresa}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.empresa && touched.empresa ? (
                              <small className="text-danger mt-1">
                                {errors.empresa}
                              </small>
                            ) : null}
                          </div>
                          <div className="col text-left">
                            <label htmlFor="cnpj" className="form-label">
                              Cnpj
                            </label>
                            <input
                              id="cnpj"
                              name="cnpj"
                              className="form-control"
                              value={values.last}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.cnpj && touched.cnpj ? (
                              <small className="text-danger mt-1">
                                {errors.cnpj}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col text-left">
                            <label htmlFor="first" className="form-label">
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              className="form-control"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                              <small className="text-danger mt-1">
                                {errors.email}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col text-left">
                            <label htmlFor="first" className="form-label">
                              Senha
                            </label>
                            <input
                              id="password"
                              name="password"
                              className="form-control"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="password"
                            />
                            {errors.password && touched.password ? (
                              <small className="text-danger mt-1">
                                {errors.password}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col text-left">
                            <label htmlFor="first" className="form-label">
                              Confirmar Senha
                            </label>
                            <input
                              id="repassword"
                              name="repassword"
                              className="form-control"
                              value={values.repassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="password"
                            />
                            {errors.repassword && touched.repassword ? (
                              <small className="text-danger mt-1">
                                {errors.repassword}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col text-right actionButtons">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={resetForm}
                            >
                              Limpar
                            </Button>

                            <Button
                              variant="primary"
                              size="sm"
                              onClick={handleSubmit}
                            >
                              Cadastrar
                            </Button>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <br />
                          <div className="col text-right">
                          Já possui uma conta? <a href="/">Entrar</a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img id="image" src={CadastroImage} 
                        className="img-fluid" 
                        alt="Cadastro-Protecnum"  
                        width={470}                    
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
