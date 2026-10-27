import json
D=json.load(open("data.json"))
I={i["id"]:i for i in D["items"]}
SHORT={"cx":"CampusX 100 Days ML","cxp":"CampusX playlists","kh":"Mitesh Khapra CS7015","td":"TuteDude","cwd":"CodeWithHarry Data Science","cwp":"CodeWithHarry Python","dsa":"DSA with Python","ext":"External","qb":"Interview Question Bank","self":"Self-prep"}
def esc(s): return s.replace("|","\\|")
def tab2(areas):
    out=[]
    for a in areas:
        out.append(f"## {a['n']}. {a['name']}\n\nSufficient resource: **{a['res']}**. Backup: {a['backup']}.\n\n| Topic | Tier | Item | Type | Course | Duration |\n| --- | --- | --- | --- | --- | --- |")
        for t in a["topics"]:
            for iid in t["items"]:
                it=I[iid]; out.append(f"| {esc(t['name'])} | {t['tier']} | {esc(it['t'])} | {it['ty']} | {SHORT[it['c']]} | {it['d'] or '—'} |")
        out.append("")
    return "\n".join(out)
def tab3():
    out=[]
    for c in D["courses"]:
        its=[i for i in D["items"] if i["c"]==c["id"]]
        tot=sum(i["s"] for i in its)
        h=f" · ~{tot/3600:.1f} h of timed video" if tot else ""
        out.append(f"## {c['name']}\n\n{len(its)} items{h}.\n")
        for i in its:
            ar=", ".join(str(x) for x in i["areas"])
            d=f" ({i['d']})" if i["d"] else ""
            out.append(f"- [ ] {i['t']}{d} [Area {ar} · {i['tier']}]")
        out.append("")
    return "\n".join(out)
import sys
part=sys.argv[1]
if part.startswith("a"):
    lo,hi=map(int,part[1:].split("-")); print(tab2([a for a in D["areas"] if lo<=a["n"]<=hi]))
else:
    print(tab3())
