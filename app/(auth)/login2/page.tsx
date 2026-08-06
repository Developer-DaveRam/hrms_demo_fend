"use client";

import React from "react";
import { Form, Input, Divider } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Button from "@/app/component/ui/Button";

export default function LoginPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log("Form values:", values);
  };

  return (
    <div className="flex min-h-screen items-center justify-between bg-white py-7 px-3" >

      <div className="flex min-h-screen">
        {/* Left Panel */}
        <div className="relative hidden  overflow-hidden rounded-4xl bg-[#060b36] lg:flex lg:flex-col lg:justify-between lg:p-12">
          {/* Subtle gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 rounded-r-4xl bg-linear-to-br from-[#060b36] via-[#0a1245] to-[#111d6e]" />

          {/* Decorative blurred circles */}
          <div className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="flex  flex-col justify-between h-full ">
            {/* Logo */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                >
                  <path
                    d="M20 4L24 14L34 16L27 23L29 34L20 29L11 34L13 23L6 16L16 14L20 4Z"
                    fill="#4ade80"
                  />
                  <path
                    d="M20 9L22.5 15L28.5 16L24 20.5L25.5 27L20 24L14.5 27L16 20.5L11.5 16L17.5 15L20 9Z"
                    fill="#fb923c"
                  />
                </svg>
              </div>
            
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-none tracking-wide text-white">
                  Skyraan
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Technologies
                </span>
              </div>
            </div>

            {/* Hero Text */}
            <div className="relative z-10 max-w-md">
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white">
                Spend Smarter,
                <br />
                Live Lighter
              </h1>
              <p className="text-sm leading-relaxed text-gray-400">
                Experience the next generation of financial infrastructure. Skyraan
                empowers modern teams to optimize spend, automate reporting, and
                scale global operations effortlessly.
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="relative z-10 flex items-center gap-2">
            <div className="h-1.5 w-6 rounded-full bg-blue-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
            <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12 lg:px-24">
          <div className="w-full max-w-105">
            {/* Mobile Logo (visible only on small screens) */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="h-full w-full"
                >
                  <path
                    d="M20 4L24 14L34 16L27 23L29 34L20 29L11 34L13 23L6 16L16 14L20 4Z"
                    fill="#4ade80"
                  />
                  <path
                    d="M20 9L22.5 15L28.5 16L24 20.5L25.5 27L20 24L14.5 27L16 20.5L11.5 16L17.5 15L20 9Z"
                    fill="#fb923c"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-none text-gray-900">
                  Skyraan
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Technologies
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h2 className="mb-3 text-[29px] font-extrabold leading-tight text-gray-900">
                Log in to your account
              </h2>
              <p className="text-sm leading-relaxed text-gray-500">
                Welcome back! Please login with your credentials to proceed. If
                you don&apos;t have a password yet, click{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-600"
                >
                  Create Password
                </a>{" "}
                to generate one.
              </p>
            </div>

            {/* Form */}
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="w-full"
              requiredMark={false}
            >
              <Form.Item
                label={
                  <span className="text-sm font-medium text-gray-700">
                    Work Email
                  </span>
                }
                className="mb-4"
              >
                <Input
                  prefix={
                    <MailOutlined className="mr-2 text-base text-gray-400" />
                  }
                  defaultValue="namitha.skyraan@gmail.com"
                  className="h-11 rounded-lg border-gray-200 bg-gray-50/50 px-3 text-sm text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:bg-white"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-sm font-medium text-gray-700">
                    Password
                  </span>
                }
                className="mb-2"
              >
                <Input.Password
                  prefix={
                    <LockOutlined className="mr-2 text-base text-gray-400" />
                  }
                  defaultValue="password123"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone className="text-gray-400" />
                    ) : (
                      <EyeInvisibleOutlined className="text-gray-400" />
                    )
                  }
                  className="h-11 rounded-lg border-gray-200 bg-gray-50/50 px-3 text-sm text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:bg-white"
                />
              </Form.Item>

              <div className="mb-6 flex justify-end">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                >
                  Forgot password?
                </a>
              </div>

              <Form.Item className="mb-0">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                >
                  Sign In
                </Button>
              </Form.Item>

              <Divider className="!my-6 !text-xs !font-medium !text-gray-400">
                OR
              </Divider>

              <Form.Item className="mb-3">
                <Button
                  variant="outline"
                  fullWidth
                  className="border-gray-900 text-gray-900 font-semibold!  hover:bg-gray-100"

                >
                  Sign in with OTP
                </Button>
              </Form.Item>

              <Form.Item className="mb-6">
                <Button
                  variant="outline"
                  fullWidth
                  // className="h-11 rounded-lg text-sm border-gray-900 font-semibold text-gray-700 hover:text-gray-900"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100"

                >
                  Sign in using Phone Number
                </Button>
              </Form.Item>

              <div className="text-center text-sm text-gray-500">
                New to Skyraan?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-600"
                >
                  Create Password
                </a>
              </div>
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
}