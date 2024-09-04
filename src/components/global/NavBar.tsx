"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FcAutomatic,
  FcBusinessman,
  FcCurrencyExchange,
  FcElectricalSensor,
  FcExport,
  FcLike,
  FcLock,
  FcManager,
  FcMultipleInputs,
  FcNook,
  FcRules,
  FcSurvey,
  FcUpload,
  FcViewDetails,
} from "react-icons/fc";
import { TbMailFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const [openMenu, setopenMenu] = useState<boolean>(false);
  const [openProcess, setopenProcess] = useState<boolean>(false);
  const [openProcess2, setopenProcess2] = useState<boolean>(false);
  const [openProcess3, setopenProcess3] = useState<boolean>(false);
  const [typeUser, settypeUser] = useState<string | null>(null);
  const [selected, setselected] = useState(0);

  const pathname = usePathname();

  const isAdminDashboard = pathname.endsWith('/dashboardAdmin');

  useEffect(() => {

    settypeUser(isAdminDashboard ?"1":"2");

  }, []);

  return (
    <div onClick={() => setopenMenu(false)} className="NavBar">
      <div
        onClick={(event) => {
          setopenMenu((prev) => !prev), event.stopPropagation();
        }}
        className="image-container-menu"
      >
        <FcSurvey />
      </div>
      <div
        onClick={(event) => event.stopPropagation()}
        className={`navbar-container ${openMenu ? "open" : "close"}`}
      >
        <div className="container-top">
          <div className="image-container-perfil">
            <FcManager />
          </div>
          <h2>Juan Perez</h2>
        </div>
        <div className="container-bottom">
          <h1>Opciones</h1>
          <div className="request-title">
            <div className="image-container">
              <FcSurvey />
            </div>
            <h3>Solicitudes</h3>
          </div>
          {typeUser === "2" && (
            <Link
              onClick={() => {
                setopenProcess((prev) => !prev);
                setopenProcess2(false);
                setopenProcess3(false);
                setselected(1);
              }}
              href="" // href="/dashboardUser/Process"
              className={`option-container ${
                selected === 1 ? "!bg-purple-own-1" : ""
              }`}
            >
              <div className="image-container">
                <FcNook />
              </div>
              <h3>Trámites Pacífico</h3>
            </Link>
          )}
          {typeUser === "2" && (
            <div
              className={`process-child-container1 ${
                openProcess ? "open" : "close"
              }`}
            >
              <Link
                href="/dashboardUser/Process/Affiliation"
                className={`option-container option-container-child ${
                  selected === 2 ? "!bg-purple-own-1" : ""
                }`}
                onClick={() => {
                  setselected(2);
                }}
              >
                <div className="image-container">
                  <FcRules />
                </div>
                <h3>Afiliación EPS</h3>
              </Link>
              <Link
                href="/dashboardUser/Process/Disaffiliation"
                className={`option-container option-container-child ${
                  selected === 3 ? "!bg-purple-own-1" : ""
                }`}
                onClick={() => {
                  setselected(3);
                }}
              >
                <div className="image-container">
                  <FcExport className="rotate-180" />
                </div>
                <h3>Desafiliación EPS</h3>
              </Link>
            </div>
          )}
          {typeUser === "1" && (
            <Link
              onClick={() => {
                setopenProcess((prev) => !prev);
                setopenProcess2(false);
                setopenProcess3(false);
                setselected(4);
              }}
              // href="/dashboardAdmin/security"
              href=""
              className={`option-container  ${
                selected === 4 ? "!bg-purple-own-1" : ""
              }`}
            >
              <div className="image-container">
                <FcLock />
              </div>
              <h3>Seguridad</h3>
            </Link>
          )}
          {typeUser === "1" && (
            <div
              className={`process-child-container2 ${
                openProcess ? "open" : "close"
              }`}
            >
              <Link
                href="/dashboardAdmin/security/securityUser"
                className={`option-container option-container-child ${
                  selected === 5 ? "!bg-purple-own-1" : ""
                }`}
                onClick={() => {
                  setselected(5);
                }}
              >
                <div className="image-container">
                  <FcBusinessman />
                </div>
                <h3>Usuario</h3>
              </Link>
            </div>
          )}
          {typeUser === "1" && (
            <Link
              onClick={() => {
                setopenProcess2((prev) => !prev);
                setopenProcess(false);
                setopenProcess3(false);
                setselected(6);
              }}
              href=""
              // href="/dashboardAdmin/configuration"
              className={`option-container ${
                selected === 6 ? "!bg-purple-own-1" : ""
              }`}
            >
              <div className="image-container">
                <FcAutomatic />
              </div>
              <h3>Configuración</h3>
            </Link>
          )}
          {typeUser === "1" && (
            <div
              className={`process-child-container2 ${
                openProcess2 ? "open" : "close"
              }`}
            >
              <Link
                href="/dashboardAdmin/configuration/email"
                className={`option-container option-container-child ${
                  selected === 7 ? "!bg-purple-own-1" : ""
                }`}
                onClick={() => {
                  setselected(7);
                }}
              >
                <div className="image-container">
                  <TbMailFilled className="text-yellow-own-2" />
                </div>
                <h3>Correo Electronico</h3>
              </Link>
            </div>
          )}
          {typeUser === "1" && (
            <Link
              onClick={() => {
                setopenProcess2(false);
                setopenProcess(false);
                setopenProcess3((prev) => !prev);
                setselected(8);
              }}
              href=""
              // href="/dashboardAdmin/configuration"
              className={`option-container ${
                selected === 8 ? "!bg-purple-own-1" : ""
              }`}
            >
              <div className="image-container">
                <FcMultipleInputs className="rotate-180" />
              </div>
              <h3>Carga Masiva</h3>
            </Link>
          )}
          {typeUser === "1" && (
            <div
              className={`process-child-container2 ${
                openProcess3 ? "open" : "close"
              }`}
            >
              <Link
                href="/dashboardAdmin/configuration/email"
                className={`option-container option-container-child ${
                  selected === 9 ? "!bg-purple-own-1" : ""
                }`}
                onClick={() => {
                  setselected(9);
                }}
              >
                <div className="image-container">
                  <FcUpload />
                </div>
                <h3>Carga inicial</h3>
              </Link>
            </div>
          )}
          {typeUser === "2" && (
            <Link
              href="/dashboardUser/SCTR"
              className={`option-container ${
                selected === 10 ? "!bg-purple-own-1" : ""
              }`}
              onClick={() => {
                setselected(10);
                setopenProcess(false);
                setopenProcess2(false);
                setopenProcess3(false);
              }}
            >
              <FcLike />
              <h3>SCTR y Vida Ley</h3>
            </Link>
          )}
          {typeUser === "2" && (
            <Link
              href="/dashboardUser/Loan"
              className={`option-container ${
                selected === 11 ? "!bg-purple-own-1" : ""
              }`}
              onClick={() => {
                setselected(11);
                setopenProcess(false);
                setopenProcess2(false);
                setopenProcess3(false);
              }}
            >
              <div className="image-container">
                <FcCurrencyExchange />
              </div>
              <h3>Préstamo</h3>
            </Link>
          )}
          {typeUser === "2" && (
            <Link
              href="/dashboardUser/Survey"
              className={`option-container ${
                selected === 12 ? "!bg-purple-own-1" : ""
              }`}
              onClick={() => {
                setselected(12);
                setopenProcess(false);
                setopenProcess2(false);
                setopenProcess3(false);
              }}
            >
              <div className="image-container">
                <FcViewDetails />
              </div>
              <h3>Encuesta de Salida</h3>
            </Link>
          )}
          {typeUser === "2" && (
            <Link
              href="/dashboardUser/Hospital"
              className={`option-container ${
                selected === 13 ? "!bg-purple-own-1" : ""
              }`}
              onClick={() => {
                setselected(13);
                setopenProcess(false);
                setopenProcess2(false);
                setopenProcess3(false);
              }}
            >
              <div className="image-container">
                <FcElectricalSensor />
              </div>
              <h3>Examen Médico</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
