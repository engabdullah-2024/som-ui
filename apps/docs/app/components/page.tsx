import React from "react";
import { Button, Card, CardContent, Input, Badge, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "somali-ui";
import { ComponentViewer } from "@/components/component-viewer";

export default function ComponentsPage() {
    return (
        <div className="space-y-16 pb-20">
            {/* Intro */}
            <div className="space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Components
                </h1>
                <p className="text-xl text-muted-foreground">
                    Beautifully designed components that you can copy and paste into your apps.
                </p>
            </div>

            {/* Button Section */}
            <ComponentViewer
                title="Button"
                description="Displays a button or a component that looks like a button."
                importCode={`import { Button } from "somali-ui";

export function ButtonDemo() {
  return <Button>Button</Button>;
}`}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </div>
            </ComponentViewer>

            {/* Badge Section */}
            <ComponentViewer
                title="Badge"
                description="Displays a badge or a component that looks like a badge."
                importCode={`import { Badge } from "somali-ui";

export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}`}
            >
                <div className="flex gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                </div>
            </ComponentViewer>

            {/* Card Section */}
            <ComponentViewer
                title="Card"
                description="Displays a card with header, content, and footer."
                importCode={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "somali-ui";

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}`}
            >
                <Card className="w-[350px]">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold leading-none tracking-tight">Create project</h3>
                        <p className="text-sm text-muted-foreground mt-2">Deploy your new project in one-click.</p>
                    </div>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <span className="text-sm font-medium">Name</span>
                                <Input placeholder="Name of your project" />
                            </div>
                        </div>
                    </CardContent>
                    <div className="flex items-center p-6 pt-0">
                        <div className="flex w-full justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>Deploy</Button>
                        </div>
                    </div>
                </Card>
            </ComponentViewer>

            {/* Dialog Section */}
            <ComponentViewer
                title="Dialog"
                description="A window overlaid on either the primary window or another dialog window."
                importCode={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "somali-ui";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`}
            >
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="text-right text-sm font-medium">Name</span>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="text-right text-sm font-medium">Username</span>
                                <Input id="username" value="@peduarte" className="col-span-3" readOnly />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="submit">Save changes</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </ComponentViewer>

            {/* Input Section */}
            <ComponentViewer
                title="Input"
                description="Displays a form input field or a component that looks like an input field."
                importCode={`import { Input } from "somali-ui";

export function InputDemo() {
  return <Input type="email" placeholder="Email" />;
}`}
            >
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <span className="text-sm font-medium">Email</span>
                    <Input type="email" placeholder="Email" />
                </div>
            </ComponentViewer>

            {/* Table Section */}
            <ComponentViewer
                title="Table"
                description="A responsive table component."
                importCode={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "somali-ui";

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
            >
                <div className="w-full rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell><Badge variant="secondary">Paid</Badge></TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">INV002</TableCell>
                                <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                                <TableCell>PayPal</TableCell>
                                <TableCell className="text-right">$150.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">INV003</TableCell>
                                <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                                <TableCell>Bank Transfer</TableCell>
                                <TableCell className="text-right">$450.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </ComponentViewer>

        </div>
    );
}
