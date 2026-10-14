from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Abubaker-Chughtai-Resume.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#101828")
MUTED = colors.HexColor("#475467")
BLUE = colors.HexColor("#255DD9")
LINE = colors.HexColor("#D0D5DD")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=22, leading=24, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.2, leading=13, textColor=BLUE))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.1, leading=11, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=BLUE, spaceBefore=6, spaceAfter=3, uppercase=True))
styles.add(ParagraphStyle(name="Job", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=INK))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontName="Helvetica", fontSize=8, leading=10, textColor=MUTED, alignment=TA_RIGHT))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=8.25, leading=10.5, textColor=INK))
styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["Body"], leftIndent=8, firstLineIndent=-7, spaceAfter=1.5))
styles.add(ParagraphStyle(name="Small", parent=styles["Normal"], fontName="Helvetica", fontSize=7.8, leading=10, textColor=MUTED))


def section(title):
    return [Paragraph(title.upper(), styles["Section"]), HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=4)]


def role_row(title, org, dates):
    left = Paragraph(f"{title}<br/><font color='#475467'>{org}</font>", styles["Job"])
    right = Paragraph(dates, styles["Meta"])
    table = Table([[left, right]], colWidths=[142 * mm, 38 * mm])
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
    return table


story = []
header_left = [
    Paragraph("Abubaker Chughtai", styles["Name"]),
    Paragraph("Software Engineering Student | Python, FastAPI and AI/ML Projects", styles["Role"]),
]
header_right = Paragraph(
    "Lahore, Punjab, Pakistan<br/>"
    "0323 1011927 | mabubakerchughtai120@gmail.com<br/>"
    "<link href='https://www.linkedin.com/in/abubaker-chughtai-a386aa337' color='#255DD9'>LinkedIn</link> | "
    "<link href='https://github.com/abubaker07-creator' color='#255DD9'>GitHub</link> | "
    "<link href='https://abubakerchughtai.me/' color='#255DD9'>Portfolio</link>",
    styles["Contact"],
)
header = Table([[header_left, header_right]], colWidths=[105 * mm, 75 * mm])
header.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("ALIGN", (1, 0), (1, 0), "RIGHT"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
story.extend([header, Spacer(1, 4)])

story += section("Profile")
story.append(Paragraph("Software Engineering student at UMT Lahore building practical systems across backend development, machine learning deployment and relational databases. Brings hands-on academic project experience together with customer support, CRM record management and education-sector operations.", styles["Body"]))

story += section("Technical Skills")
story.append(Paragraph("<b>Languages:</b> Python, C++, JavaScript, HTML, CSS, SQL, Assembly (EMU8086)<br/><b>Engineering and AI:</b> FastAPI, DistilBERT, machine learning deployment, requirements engineering, system design<br/><b>Data and tools:</b> Relational database design, 3NF normalization, stored procedures, EER diagrams, CRM, Google Workspace, Microsoft Office", styles["Body"]))

story += section("Selected Projects")
projects = [
    ("Full-Stack Sentiment Analysis", "Python, FastAPI, DistilBERT, HTML", "Built a movie-review classifier with a DistilBERT model, FastAPI service layer and browser-based frontend."),
    ("LibTrack - Library Management", "SQL, Database Design", "Designed an online library data model using EER diagrams, 3NF normalization and stored procedures for core operations."),
    ("Smart Waste Management", "Requirements Engineering, SRS", "Produced requirements, system design and structured documentation for a smart waste-collection concept."),
    ("Phone Directory and Assembly Calculator", "C++, DSA, EMU8086", "Implemented record search and management with data structures, plus a functional calculator in Assembly."),
]
for title, tech, result in projects:
    story.append(KeepTogether([role_row(title, tech, ""), Paragraph(f"- {result}", styles["ResumeBullet"])]))

story += section("Experience")
experience = [
    ("Customer Service Sales Representative", "Pakistan Law Bot - Pixel PK", "Jan 2026 - Present", ["Support customer queries and product use for Pakistan LawBot.", "Maintain lead records in CRM and Google Sheets to support accurate tracking and follow-up."]),
    ("Educational Consultant", "Four partner schools, Lahore", "Jan 2024 - Present", ["Coordinate school registration, Education Department requirements and BISE Lahore affiliation.", "Manage 9th and 10th grade registration and admission workflows across four institutions."]),
    ("Account Manager", "Unique Science Academy - Shama Chapter", "Jul 2024 - Dec 2025", ["Managed accounts, administrative operations and organized records supporting day-to-day coordination."]),
]
for title, org, dates, bullets in experience:
    block = [role_row(title, org, dates)] + [Paragraph(f"- {bullet}", styles["ResumeBullet"]) for bullet in bullets]
    story.append(KeepTogether(block))

story += section("Education and Research")
education = Table([
    [Paragraph("<b>BS Software Engineering</b><br/><font color='#475467'>University of Management and Technology (UMT), Lahore</font>", styles["Body"]), Paragraph("Oct 2024 - Present", styles["Meta"])],
    [Paragraph("<b>ICS (Physics)</b><br/><font color='#475467'>Crescent Model Higher Secondary School</font>", styles["Body"]), Paragraph("Aug 2022 - Apr 2024", styles["Meta"])],
], colWidths=[142 * mm, 38 * mm])
education.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 2)]))
story.append(education)
story.append(Paragraph("<b>Course research:</b> Effect of Incomplete Requirements on Software Quality - co-authored with Arbab Rasool and formatted to the IJSRP double-column template.", styles["Small"]))

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=15 * mm, leftMargin=15 * mm, topMargin=13 * mm, bottomMargin=12 * mm, title="Abubaker Chughtai - Resume", author="Abubaker Chughtai")
doc.build(story)
print(OUTPUT)
