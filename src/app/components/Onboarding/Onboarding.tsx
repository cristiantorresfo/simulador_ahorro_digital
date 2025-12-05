
"use client";

import { useState } from "react";
import BackButton from "../BackButton/BackButton";
import Input from "../Input/Input";
import styles from "./onboarding.module.scss";

export default function Onboarding() {
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("OKlk");
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        document: "",
        email: "",
        recaptcha: "",
    });

    const [successPopup, setSuccessPopup] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    };

    const submit = () => {
        let valid = true;
        const newErrors = { name: "", document: "", email: "", recaptcha: "" };

        if (!name || name.trim().length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres.";
            valid = false;
        }

        if (!document || !/^\d{5,}$/.test(document)) {
            newErrors.document = "El documento debe tener al menos 5 dígitos.";
            valid = false;
        }

        if (!email || !validateEmail(email)) {
            newErrors.email = "Ingresa un correo válido.";
            valid = false;
        }

        if (token !== "OK") {
            newErrors.recaptcha = "Recaptcha inválido. Por favor, verifica.";
            valid = false;
        }

        if (!valid) {
            setErrors(newErrors);
            setSuccess("");
            return;
        }

        setErrors({ name: "", document: "", email: "", recaptcha: "" });
        const uuid = crypto.randomUUID();
        setSuccessPopup(`Tu solicitud ha sido registrada exitosamente con el ID: ${uuid}`);
    };

    const handleRecaptcha = () => {
        const success = Math.random() < 0.7;
        setToken(success ? "OK" : "FAIL");
    };

    const closePopup = () => setSuccessPopup("");

    return (
        <div className={styles.page}>
            <BackButton />
            <div className={styles.container}>
                <h1>Abre tu cuenta de ahorro digital</h1>
                <h4>Completa tu registro y empieza a ahorrar de forma segura.</h4>

                <div className={styles.inputsWrapper}>
                    <div className={styles.inputForm}>
                        <Input
                            label="Nombre"
                            value={name}
                            onChange={setName}
                        />
                        {errors.name && <p className={styles.error}>{errors.name}</p>}

                    </div>
                    <div className={styles.inputForm}>
                        <Input
                            label="Documento"
                            value={document}
                            onChange={setDocument}
                        />
                        {errors.document && <p className={styles.error}>{errors.document}</p>}
                    </div>

                    <div className={styles.inputForm}>
                        <Input
                            label="Correo"
                            type="email"
                            value={email}
                            onChange={setEmail}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                    </div>
                </div>

                <div className={styles.recaptchaWrapper}>
                    <button
                        className={`${styles.recaptchaButton} ${token === "OK" ? styles.recaptchaSuccess : token === "FAIL" ? styles.recaptchaFail : ""}`}
                        onClick={handleRecaptcha}
                    >
                        {token === "OK"
                            ? "Verificado ✔️"
                            : token === "FAIL"
                                ? "Error ❌"
                                : "Verificar reCAPTCHA"}
                    </button>
                    {errors.recaptcha && <p className={styles.error}>{errors.recaptcha}</p>}
                </div>

                <button className={styles.FormButton} onClick={submit}>
                    Enviar
                </button>

            </div>
            {successPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <h2>¡Éxito!</h2>
                        <p>{successPopup}</p>
                        <button className={styles.closeButton} onClick={closePopup}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}