import {marge, radius, arcRadius} from "../../git-graph";

class GitGraphDrawer {

    constructor(commitData, canvas) {
        this.commitData = commitData;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.circleX = ((2 * this.commitData.level) - 1) * radius + this.commitData.level * marge;
        this.circleY = canvas.height / 2;
        this.stashDashRect = [3];
        this.stashDashLine = [3];
    }

    drawCommit() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.lineWidth = 2;

        this.drawDirectChildLine();
        this.drawDirectParentLine();

        this.drawStartBranchesLine();
        this.drawFinishBranchesLine();

        this.drawOtherBranchesLine();

        this.commitData.stash ? this.drawCommitRect() : this.drawCommitCircle();
    }

    drawCommitCircle() {
        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.arc(this.circleX, this.circleY, radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = this.getColorByLevel(this.commitData.level);
        this.ctx.stroke();
    }

    drawCommitRect() {
        this.ctx.beginPath();
        this.ctx.setLineDash(this.stashDashRect);
        this.ctx.rect(this.circleX - radius, this.circleY - radius, 2 * radius, 2 * radius);
        this.ctx.strokeStyle = this.getColorByLevel(this.commitData.level);
        this.ctx.stroke();
    }

    drawDirectParentLine() {
        if (this.commitData.hasDirectParent) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.circleX, this.circleY - radius);
            this.ctx.lineTo(this.circleX, 0);
            this.ctx.strokeStyle = this.getColorByLevel(this.commitData.level);
            this.ctx.stroke();
        }
    }

    drawDirectChildLine() {
        if (this.commitData.hasDirectChild) {
            this.ctx.beginPath();

            this.commitData.stash ? this.ctx.setLineDash(this.stashDashLine) : this.ctx.setLineDash([]);

            this.ctx.moveTo(this.circleX, this.circleY + radius);
            this.ctx.lineTo(this.circleX, this.canvas.height);
            this.ctx.strokeStyle = this.getColorByLevel(this.commitData.level);
            this.ctx.stroke();
        }
    }

    drawStartBranchesLine() {
        this.commitData.start.forEach(d => {
            this.drawHorizontalLine(d);

            if (this.commitData.level !== d.level) {
                this.ctx.beginPath();
                this.ctx.moveTo((((2 * d.level) - 1) * radius + d.level * marge), this.circleY - arcRadius);

                this.ctx.lineTo(((2 * d.level) - 1) * radius + d.level * marge, 0);

                this.ctx.strokeStyle = this.getColorByLevel(d.level);

                this.ctx.stroke();

                this.drawStartArc(d);
            }
        });
    }

    drawFinishBranchesLine() {
        this.commitData.finish.forEach(d => {
            this.drawHorizontalLine(d);

            if (this.commitData.level !== d.level) {
                this.ctx.beginPath();
                this.ctx.moveTo((((2 * d.level) - 1) * radius + d.level * marge), this.circleY + arcRadius);

                this.ctx.lineTo(((2 * d.level) - 1) * radius + d.level * marge, this.canvas.height);

                this.ctx.strokeStyle = this.getColorByLevel(d.level);

                this.ctx.stroke();

                this.drawFinishArc(d);
            }
        });
    }

    drawOtherBranchesLine() {
        this.commitData.branches.forEach(d => {
            this.ctx.beginPath();

            d.hasStash ? this.ctx.setLineDash(this.stashDashLine) : this.ctx.setLineDash([]);

            this.ctx.moveTo(((2 * d.level) - 1) * radius + d.level * marge, 0);
            this.ctx.lineTo(((2 * d.level) - 1) * radius + d.level * marge, this.canvas.height);

            this.ctx.strokeStyle = this.getColorByLevel(d.level);

            this.ctx.stroke();
        });
    }

    drawHorizontalLine(data) {
        this.ctx.beginPath();

        if (this.commitData.level > data.level) {
            this.ctx.moveTo(this.circleX - radius, this.circleY);
            this.ctx.lineTo((((2 * data.level) - 1) * radius + data.level * marge) + arcRadius, this.circleY);
        } else if (this.commitData.level < data.level) {
            this.ctx.moveTo(this.circleX + radius, this.circleY);
            this.ctx.lineTo((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY);
        }

        this.ctx.strokeStyle = this.getColorByLevel(data.level);

        this.ctx.stroke();
    }

    drawStartArc(data) {
        this.ctx.beginPath();
        if (this.commitData.level > data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) + arcRadius, this.circleY - arcRadius, arcRadius, 0.5 * Math.PI, Math.PI, false);
        } else if (this.commitData.level < data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY - arcRadius, arcRadius, 0, 0.5 * Math.PI, false);
        }

        this.ctx.strokeStyle = this.getColorByLevel(data.level);

        this.ctx.stroke();
    }

    drawFinishArc(data) {
        this.ctx.beginPath();
        if (this.commitData.level > data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) + arcRadius, this.circleY + arcRadius, arcRadius, Math.PI, 1.5 * Math.PI, false);
        } else if (this.commitData.level < data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY + arcRadius, arcRadius, 1.5 * Math.PI, 2 * Math.PI, false);
        }

        this.ctx.strokeStyle = this.getColorByLevel(data.level);

        this.ctx.stroke();
    }

    getColorByLevel(level) {
        let colors = [
            '#16a085',
            '#27ae60',
            '#2980b9',
            '#8e44ad',
            '#f9ca24',
            '#d35400',
            '#c0392b',
            '#7f8c8d',
        ];

        return colors[((level - 1) % colors.length)];
    }
}

export default GitGraphDrawer;
