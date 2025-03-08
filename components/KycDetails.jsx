import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  FileText,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import KycImage from "./KycImage";

export default function KycDetails({ kyc }) {
  const kycData = {
    status: "pending", // "pending", "verified", "rejected"
    submittedAt: "2023-11-15T10:30:00Z",
    documents: [
      {
        id: 1,
        type: "ID Card (Front)",
        filename: "id_card_front.jpg",
        uploadedAt: "2023-11-15T10:28:00Z",
      },
      {
        id: 2,
        type: "ID Card (Back)",
        filename: "id_card_back.jpg",
        uploadedAt: "2023-11-15T10:29:00Z",
      },
      {
        id: 3,
        type: "Proof of Address",
        filename: "utility_bill.pdf",
        uploadedAt: "2023-11-15T10:30:00Z",
      },
    ],
    verificationNotes: "",
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 gap-1">
            <ShieldCheck className="w-4 h-4" />
            Verified
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="destructive" className="px-3 py-1 gap-1">
            <ShieldAlert className="w-4 h-4" />
            Rejected
          </Badge>
        );
      case "pending":
      default:
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-50 px-3 py-1 gap-1"
          >
            <Clock className="w-4 h-4" />
            Pending
          </Badge>
        );
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container max-w-5xl py-8 mx-auto">
      <p className="text-muted-foreground mb-8">
        View your submitted documents and verification status
      </p>

      <div className="grid gap-8">
        {/* Status Card */}
        <Card className={"shadow-none"}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Verification Status</CardTitle>
              {getStatusBadge(kyc.status)}
            </div>
            <CardDescription>
              Submitted on {formatDate(kyc.submitted_at)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-full flex items-center">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="font-medium">Documents Submitted</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(kyc.submitted_at)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-full flex items-center">
                    <div
                      className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
                        kyc.status !== "pending"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="font-medium">Under Review</h3>
                      <p className="text-sm text-muted-foreground">
                        {kyc.status === "pending"
                          ? "Your documents are being reviewed"
                          : "Review completed"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-full flex items-center">
                    <div
                      className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
                        kyc.status === "approved"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="font-medium">Verification Complete</h3>
                      <p className="text-sm text-muted-foreground">
                        {kyc.status === "approved"
                          ? "Your identity has been verified"
                          : kyc.status === "rejected"
                          ? "Verification unsuccessful"
                          : "Pending verification"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical line connecting the steps */}
                <div className="absolute left-5 top-5 h-[calc(100%-10px)] w-0.5 bg-muted -z-10"></div>
              </div>

              {kyc.status === "rejected" && kyc?.rejection_reason && (
                <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                  <h4 className="font-medium text-destructive mb-1">
                    Verification Notes
                  </h4>
                  <p className="text-sm">{kycData?.rejection_reason}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Documents */}
        <Card className={"shadow-none"}>
          <CardHeader>
            <CardTitle>Uploaded Documents</CardTitle>
            <CardDescription>
              Documents you've submitted for verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <KycImage
                label={"Document front"}
                docImage={kyc?.id_document_front}
                submitted_at={kyc?.submitted_at}
              />
              <KycImage
                label={"Document Back"}
                docImage={kyc?.id_document_back}
                submitted_at={kyc?.submitted_at}
              />
              <KycImage
                label={"Selfie with id"}
                docImage={kyc?.selfie_with_id}
                submitted_at={kyc?.submitted_at}
              />
              {/* {kycData.documents.map((doc) => (
                <div key={doc.id} className="border rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3] bg-muted">
                    {doc.filename.endsWith(".pdf") ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-16 h-16 text-muted-foreground" />
                      </div>
                    ) : (
                      <Image
                        src={`/placeholder.svg?height=300&width=400`}
                        alt={doc.type}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">{doc.type}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {doc.filename}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Uploaded: {formatDate(doc.uploadedAt)}
                    </p>
                  </div>
                </div>
              ))} */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
