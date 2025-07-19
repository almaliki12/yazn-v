"use client"

import Link from "next/link"
import { MessageCircle, Send, Instagram, Camera, Video, Facebook, Mail } from "lucide-react"

interface SocialLinksProps {
  className?: string
  showLabels?: boolean
  iconSize?: number
}

export default function SocialLinks({ className = "", showLabels = true, iconSize = 5 }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "واتساب",
      icon: <MessageCircle className={`h-${iconSize} w-${iconSize}`} />,
      url: "https://wa.me/967739590467",
      color: "#25D366",
    },
    {
      name: "تيليجرام",
      icon: <Send className={`h-${iconSize} w-${iconSize}`} />,
      url: "https://t.me/almaliki467",
      color: "#0088cc",
    },
    {
      name: "انستغرام",
      icon: <Instagram className={`h-${iconSize} w-${iconSize}`} />,
      url: "https://www.instagram.com/almal_ki44",
      color: "#E1306C",
    },
    {
      name: "سناب شات",
      icon: <Camera className={`h-${iconSize} w-${iconSize}`} />,
      url: "https://www.snapchat.com/add/almali_ki45?share_id=FWsGm9_59Hw&locale=ar-EG",
      color: "#FFFC00",
    },
    {
      name: "تيك توك",
      icon: <Video className={`h-${iconSize} w-${iconSize}`} />,
      url: "https://www.tiktok.com/@almal_ki44?_t=ZP-8vNPKqpcfMc&_r=1",
      color: "#000000",
    },
    {
      name: "فيسبوك",
      icon: <Facebook className={`h-${iconSize} w-${iconSize}`} />,
      url: "https://www.facebook.com/share/12KEgMHA9L1/",
      color: "#1877F2",
    },
    {
      name: "البريد الإلكتروني",
      icon: <Mail className={`h-${iconSize} w-${iconSize}`} />,
      url: "mailto:almaliki.electronic.services@gmail.com",
      color: "#D44638",
    },
  ]

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 bg-${link.color}/10 text-${link.color} hover:bg-${link.color} hover:text-white p-2 rounded-md transition-colors`}
          style={{
            backgroundColor: `${link.color}10`,
            color: link.color,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = link.color
            e.currentTarget.style.color = "#ffffff"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = `${link.color}10`
            e.currentTarget.style.color = link.color
          }}
        >
          {link.icon}
          {showLabels && <span>{link.name}</span>}
        </Link>
      ))}
    </div>
  )
}
