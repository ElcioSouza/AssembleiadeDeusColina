"use client";
import React from "react";
import Button from "@/components/Button";
import { ItemBanner } from "@/constant/ItemBanner";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaWhatsapp,
  FaLinkedin,
  FaWhatsappSquare,
  FaGithub,
  FaEdit,
  FaEye,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import NavLinksController from "@/controllers/NavLinksController";
import SendEmailController from "@/controllers/SendEmailController";
import { SendEmailDTO } from "@/dto/SendEmailDTO";

const contactSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo obrigatório"),
  msg: yup.string().required("Campo obrigatório"),
});

export default function Home() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [sendFormEmail, setSendFormEmail] = React.useState(true);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<SendEmailDTO>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      phone: "",
    },
  });

  return (
    <>
<section
        className="bg-[url('https://www.dropbox.com/scl/fi/qc6cf3ipazgpld6ugfq73/banner.jpg?rlkey=60drj6p0bkk44xepjzvhnd1rh&st=6cumc3h9&dl=1')] bg-cover bg-center min-h-[500px] w-full relative"
        id="home"
      >
      <div className="bg-[rgb(13,13,13,0.5)] w-full h-[100%] absolute z-0 top left"></div>
        <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[600px] relative z-1">
          <div className="mt-[1.9rem]">
            <div>
              <div>
                <div className="mt-10 xl:mt-auto">
                  <div>
                    <h1 className="text-center text-white font-bold text-4xl mt-3">
                      Assembleia de Deus Familia Colinas
                    </h1>
                    <p className="text-center text-white text-3xl mt-3 ">
                      Pastor Francisco Araújo
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-3 gap-3 ">
                  <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#A9328C] transition duration-700 hover:scale-125">
                      <a href="https://www.instagram.com/assembleiadedeusfamiliacolinas">
                        <FaInstagram className="text-[20px] text-white" />
                      </a>
                    </div>
                    <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#0866ff] transition duration-700 hover:scale-125">
                      <a href="https://www.facebook.com/Assembleiadedeusfamiliacolinas">
                        <FaFacebook className="text-[20px] text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center xl:justify-center items-center">
                    <Button
                      onClick={() => NavLinksController.execute("contact")}
                      className="md:mx-0 mt-8"
                      icon={
                        <BiChevronRight
                          className="text-[2em] text-white"
                          type="submit"
                        />
                      }
                    >
                      Entre em contato
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-item flex flex-col md:flex-row justify-center items-start flex-wrap gap-16 xl:gap-7 mt-[10px]  md:mt-[10px] xl:mt-[10px] px-2 md:px-0">
        {ItemBanner &&
          ItemBanner.map((item, index) => (
            <div
              key={index}
              className=" item hover:bg-[#403C3D] flex p-9 justify-start items-center w-full md:w-auto max-w-[100%] md:max-w-[300px] flex-col h-[320px] min-h-[320px] bg-white shadow-[0px_0px_3px_#00000026] translate-y-[-50px] text-base leading-[1.4] transition-all duration-[0.6s] ease-[ease] mb-5 px-5 rounded-xl relative"
            >
              <div className="icon_circlo flex  justify-center items-center text-[60px] bg-[#fff] w-[100px] h-[100px] absolute top-[-60px]  rounded-full">
                {item.icon}
              </div>
              <div className=" mt-1">
                <h2 className="text-[22px] text-center my-3 font-bold">
                  {item.title}
                </h2>
                <p className="text-xl leading-[30px]  text-center">
                  {item.describe}
                </p>
                <p className="text-xl leading-[30px]  text-center mt-1">
                  {item.subdescribe}
                </p>
              </div>
            </div>
          ))}
      </section>
          
      <section
        className="bg-[#eff1f4] my-[2rem] md:my-[4rem]  py-[2rem] xl:py-[11rem]"
        id="about"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3 md:gap-32 ">
            <div>
              <div className="rounded-full bg-[url('https://www.dropbox.com/scl/fi/wiejb2m65k5fnmrx4llvn/logo.jpg?rlkey=v1ongttt5o8qq6vse4x6pjo5w&st=c66f8fob&dl=1')] bg-cover bg-center w-[130px] h-[130px] xl:w-[350px] xl:h-[350px] mx-auto   border-white border-[1.4px] duration-700 hover:scale-110 mt-7"></div>
            </div>
            <div className="w-[100%] xl:w-[55%] text-center md:text-left">
              <div className="mb-5">
                <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10">
                  Quem Somos
                </h2>
              </div>
              <div>
                <p className="mb-3 text-xl leading-[30px]">
                  Somos uma igreja conservadora de visão progressista no sentido de avançar na fé e na comunhão bíblica seguindo sempre os parâmetros das Sagradas Escrituras.
                </p>
                <p className="mb-3 text-xl leading-[30px]">
                  Estamos localizados em Vila Velha - ES. Tudo começou por conta de uma família generosa que abriu as portas de sua Casa para a pregação do evangelho da paz. A partir daí, Deus começou operar maravilha  as começaram acontecer.
                </p>
              </div>
              <div className="flex justify-center md:justify-start text-center">
                <Button
                  onClick={() => NavLinksController.execute("contact")}
                  className="md:mx-0 mt-8"
                  icon={
                    <BiChevronRight
                      className="text-[2em] text-white"
                      type="submit"
                    />
                  }
                >
                  Entre em contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-start flex-wrap gap-16 xl:gap-7 my-[2rem] xl:my-[8rem]" id="time">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center md:text-left">
            <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10">
                  Horario
                </h2>
            </div>
            <div className="flex justify-center xl:justify-start gap-16 xl:gap-7 flex-wrap max-w-[1200px] w-full">
              <div className="px-6">
                <div className="text-[1.5em] xl:text-[20px] font-bold my-6">Segunda Feira</div>
                <div className="shadow-[0_2px_6px_rgba(0,0,0,0.2)] px-2 py-3 my-6">19:30 - 20:30 Oração da Igreja</div>
              </div>
              <div className="px-6">
                <div className="text-[1.5em] xl:text-[20px] font-bold my-6">Sexta Feira</div>
                <div className="shadow-[0_2px_6px_rgba(0,0,0,0.2)] px-2 py-3 my-6">19:30 - 20:30 - Culto da Palavra</div>
              </div>
              <div className="px-6">
                <div className="text-[1.5em] xl:text-[20px] font-bold my-6">Sabado</div>
                <div className="shadow-[0_2px_6px_rgba(0,0,0,0.2)] px-2 py-3 my-6">07:30 - 08:30 - Consagração</div>
              </div>
              <div className="px-6">
                <div className="text-[1.5em] xl:text-[20px] font-bold my-6">Domingo</div>
                <div className="shadow-[0_2px_6px_rgba(0,0,0,0.2)] px-2 py-3 my-6">08:30 - Escola Bíblica Dominical</div>
                <div className="shadow-[0_2px_6px_rgba(0,0,0,0.2)] px-2 py-3 my-6">19:00 - Culto da Familia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#eff1f4] py-[2rem] xl:py-[7.5rem] px-2 xl:px-0 my-2"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-[100%] xl:w-[50%] px-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7877259204506!2d-40.32869082438269!3d-20.350386181134642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83de1856ba0a3%3A0xe7d6897edae9e558!2sR.%20Sete%20(Colinas)%20-%20Aribiri%2C%20Vila%20Velha%20-%20ES!5e0!3m2!1spt-PT!2sbr!4v1724360938333!5m2!1spt-PT!2sbr" width="600" height="450" className="w-full h-[450px]" loading="lazy"></iframe>
            </div>
            <div className="w-[100%] xl:w-[50%]">
              <div className="text-center my-4 md:my-0">
                <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10 mt-28 xl:mt-auto">
                  Contato
                </h2>
              </div>
              {sendFormEmail ? (
                <form
                  className="w-full flex flex-col gap-6 mt-16"
                  onSubmit={handleSubmit((data) =>
                    SendEmailController.execute(data, { setSendFormEmail })
                  )}
                >
                  <div>
                    <Input
                      name="name"
                      register={register}
                      className="w-full h-[3.5rem] pl-6 bg-[#eff1f4] border-[2px] outline-none border-[#ddd] rounded-lg"
                      control={control}
                      error={errors.name}
                      placeholder="Nome"
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="email"
                      register={register}
                      className="w-full h-[3.5rem] pl-6 bg-[#eff1f4] border-[2px] outline-none border-[#ddd] rounded-lg"
                      control={control}
                      error={errors.email}
                      placeholder="E-mail"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      register={register}
                      className="w-full h-[3.5rem] pl-24 bg-[#eff1f4] border-[2px] outline-none border-[#ddd] rounded-lg"
                      placeholder="Celular"
                      control={control}
                      error={errors.phone}
                      mask="(99)99999-9999"
                    />
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <TextArea
                      name="msg"
                      register={register}
                      className="w-full pl-6 bg-[#eff1f4] border-[2px] outline-none  border-[#ddd] rounded-lg"
                      placeholder="Mensagem"
                      error={errors.msg}
                    />
                    {errors.msg && (
                      <p className="text-red-500">{errors.msg.message}</p>
                    )}
                  </div>
                  <div className="w-full flex justify-center xl:justify-start">
                    <Button
                      icon={
                        <BiChevronRight
                          className="text-[2em] text-white"
                          type="submit"
                        />
                      }
                    >
                      Entre em contato
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="w-full flex justify-center xl:justify-start">
                  <h1 className="relative flex justify-center items-center btn-primary max-w-[290px] p-3 w-full mt-5 bg-[#000] hover:bg-[#1F2740] text-white font-bold rounded-xl text-[16px] duration-700 text-center">
                    <AiOutlineCheckCircle className="mr-2" size={24} />
                    Email enviado com sucesso!!
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
